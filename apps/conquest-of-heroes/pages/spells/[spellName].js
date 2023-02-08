import { Link, Button, UnorderedList, ListItem, Heading } from '@chakra-ui/react';
import { spells } from '../../data/spells';
import Layout from '../../components/layout';
import NextLink from 'next/link';

export default function Spells({ spell }) {
  const spellName = 'name';
  return (
    <Layout>
      <NextLink href="/spells" passHref>
        <Link mb={8} as={Button}>
          Back to Spells
        </Link>
      </NextLink>
      <Heading as="h1" size="2xl" mb={4}>
        {spell.name}
      </Heading>

      <UnorderedList>
        <ListItem>{spell.casting_time}</ListItem>
        <ListItem>
          {spell.classes.map((classType) => (
            <span key={classType}>{classType}&nbsp;</span>
          ))}
        </ListItem>
        <ListItem>{spell.description}</ListItem>
        {spell.descriptionContinued && <ListItem>{spell.descriptionContinued}</ListItem>}
        <ListItem>{spell.duration}</ListItem>
        <ListItem>{spell.level}</ListItem>
        <ListItem>{spell.range}</ListItem>
        <ListItem>{spell.school}</ListItem>
        <ListItem>
          {spell.tags.map((tag) => (
            <span key={tag}>{tag}&nbsp;</span>
          ))}
        </ListItem>
        <ListItem>Ritual? &nbsp;{spell.ritual ? 'true' : 'false'}</ListItem>
        <ListItem>Spell Type:&nbsp;{spell.type}</ListItem>
      </UnorderedList>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const spell = spells.find((spell) => spell.name === params.spellName);
  return {
    props: {
      spell,
    },
  };
}

export async function getStaticPaths() {
  const paths = spells.map((spell) => {
    return {
      params: {
        spellName: spell.name,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
  console.log(`paths:`, paths);
}
