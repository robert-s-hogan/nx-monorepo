import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Heading } from '@with-nx/react-ui';
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

  const drawChart = () => {
    if (!ref.current) return;

    const margin = { top: 20, right: 20, bottom: 30, left: 100 };
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

    let minRound = Number.POSITIVE_INFINITY;
    let maxRound = Number.NEGATIVE_INFINITY;
    sortedPlayers.forEach((p) => {
      const lowRound = convertToRoundAndPick(p.low, numberOfTeams).round;
      const highRound = convertToRoundAndPick(p.high, numberOfTeams).round;
      if (lowRound < minRound) minRound = lowRound;
      if (highRound > maxRound) maxRound = highRound;
    });

    // Define x-scale for rounds, starting from 1 and going to 16
    // Define x-scale for rounds, starting from minRound and going to maxRound
    const x = d3.scaleLinear().domain([0, 16]).range([0, width]);

    // Define y-scale for player names
    const y = d3
      .scaleBand()
      .domain(sortedPlayers.map((p) => p.name))
      .range([0, height])
      .padding(0.3);

    // Append x-axis to represent rounds
    svg
      .append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x).ticks(16));

    // Append y-axis to represent player names
    svg.append('g').call(d3.axisLeft(y));

    // Draw lines connecting low and high values
    sortedPlayers.forEach((player) => {
      const lowRound = convertToRoundAndPick(player.low, numberOfTeams).round;
      const highRound = convertToRoundAndPick(player.high, numberOfTeams).round;
      const startX = Math.min(lowRound, highRound);
      const endX = Math.max(lowRound, highRound);

      svg
        .append('rect')
        .attr('x', x(startX))
        .attr('y', y(player.name))
        .attr('width', x(endX) - x(startX))
        .attr('height', y.bandwidth())
        .attr('fill', lowRound < highRound ? 'green' : 'red');
    });
  };

  useEffect(() => {
    // Draw the initial chart
    drawChart();

    // Add an event listener to redraw the chart on window resize
    const handleResize = () => {
      drawChart();
    };
    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [players, ref.current, numberOfTeams]);

  return (
    <div className="bg-primary text-white pt-4">
      <Heading level={2} className="uppercase">
        Players with High Variability
      </Heading>
      <div ref={ref} />
    </div>
  );
};

export default RisersAndFallers;
