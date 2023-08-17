import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

import { convertToRoundAndPick } from '../utils/helper';

type Player = {
  name: string;
  adp: number;
  low: number;
  high: number;
  stdev?: number;
};

type RisersAndFallersProps = {
  players: Player[];
};

const RisersAndFallers: React.FC<RisersAndFallersProps> = ({ players }) => {
  const ref = useRef<HTMLDivElement>(null);
  const numberOfTeams = 12;

  useEffect(() => {
    if (!ref.current) return;

    const margin = { top: 50, right: 20, bottom: 30, left: 100 };
    const width = ref.current.clientWidth - margin.left - margin.right;
    const sortedPlayers = [...players]
      .sort((a, b) => b.stdev - a.stdev)
      .slice(0, 5);
    const height = sortedPlayers.length * 50;

    d3.select(ref.current).select('svg').remove();

    const svg = d3
      .select(ref.current)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const y = d3
      .scaleBand()
      .domain(sortedPlayers.map((p) => p.name))
      .range([0, height])
      .padding(0.3);

    sortedPlayers.forEach((player, i) => {
      const row = svg
        .append('g')
        .attr('transform', `translate(0,${y(player.name)})`);

      const start = `${
        convertToRoundAndPick(player.low, numberOfTeams).round
      }.${convertToRoundAndPick(player.low, numberOfTeams).pick}`;
      const end = `${convertToRoundAndPick(player.high, numberOfTeams).round}.${
        convertToRoundAndPick(player.high, numberOfTeams).pick
      }`;

      const isRising = player.low < player.high; // Determine if the player value is rising or falling

      row
        .append('text')
        .attr('x', -10)
        .attr('y', y.bandwidth() / 2)
        .text(player.name)
        .attr('text-anchor', 'end');

      row
        .append('path')
        .attr(
          'd',
          `M0,${y.bandwidth() / 2} Q${width / 2},${
            player.adp - player.low
          } ${width},${y.bandwidth() / 2}`
        )
        .attr('stroke', isRising ? 'green' : 'red') // Color based on whether value is rising or falling
        .attr('fill', 'none');

      row
        .append('text')
        .attr('x', 0)
        .attr('y', y.bandwidth() / 2 + 15)
        .text(start)
        .attr('text-anchor', 'start');

      row
        .append('text')
        .attr('x', width)
        .attr('y', y.bandwidth() / 2 + 15)
        .text(end)
        .attr('text-anchor', 'end');
    });
  }, [players, ref.current, numberOfTeams]);

  return <div ref={ref} />;
};

export default RisersAndFallers;
