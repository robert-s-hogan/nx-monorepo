import { CSSProperties, useEffect, useState } from 'react';
import Head from 'next/head';

import TheHogansLayout from '../components/TheHogansLayout';
import { googleCalendarUrl, party } from '../components/birthday/content';
import {
  Helmet,
  Icon,
  Pizza,
  Rain,
  STARS,
  Star,
  Sun,
} from '../components/birthday/icons';
import styles from '../components/birthday/Birthday.module.css';

// Theo's 8th birthday invite. Shared by link with guests, but kept out of
// search engines and the sitemap (noindex) since it has a party location and
// a phone number. Details live in components/birthday/content.ts.

const START = new Date(party.start).getTime();

/** Minutes until the party, or null before the browser has mounted. */
function useMinutesLeft() {
  const [mins, setMins] = useState<number | null>(null);
  useEffect(() => {
    const tick = () =>
      setMins(Math.max(0, Math.floor((START - Date.now()) / 60000)));
    const first = setTimeout(tick, 0);
    const id = setInterval(tick, 30000);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, []);
  return mins;
}

function Countdown() {
  const mins = useMinutesLeft();
  if (mins === 0)
    return <p className={styles.countLabel}>It&apos;s party time! 🎉</p>;
  const pad = (n: number) => String(n).padStart(2, '0');
  const boxes =
    mins === null
      ? [
          ['--', 'Days'],
          ['--', 'Hours'],
          ['--', 'Mins'],
        ]
      : [
          [String(Math.floor(mins / 1440)), 'Days'],
          [pad(Math.floor((mins % 1440) / 60)), 'Hours'],
          [pad(mins % 60), 'Mins'],
        ];
  return (
    <>
      <div className={styles.countdown} aria-live="polite">
        {boxes.map(([value, unit]) => (
          <div key={unit} className={styles.countBox}>
            <b>{value}</b>
            <small>{unit}</small>
          </div>
        ))}
      </div>
      <p className={styles.countLabel}>until the party starts</p>
    </>
  );
}

function CopyButton({ text, label }: { text: string; label: string }) {
  const [shown, setShown] = useState(label);
  const flash = (msg: string) => {
    setShown(msg);
    setTimeout(() => setShown(label), 1800);
  };
  return (
    <button
      type="button"
      className={styles.btn}
      onClick={() => {
        if (!navigator.clipboard) return flash("Copy didn't work here");
        navigator.clipboard.writeText(text).then(
          () => flash('Copied!'),
          () => flash("Copy didn't work here"),
        );
      }}
    >
      {shown}
    </button>
  );
}

function GiftCard({ card }: { card: (typeof party.gifts.cards)[number] }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      type="button"
      className={`${styles.gift} ${open ? styles.open : ''}`}
      style={{ '--c': card.color } as CSSProperties}
      aria-expanded={open}
      onClick={() => setOpen((o) => !o)}
    >
      <div className={styles.giftTop}>
        <span className={styles.giftIcon}>
          <Icon name={card.icon} />
        </span>
        <div>
          <h3>{card.title}</h3>
          <p className={styles.why}>{card.why}</p>
        </div>
      </div>
      <div className={styles.giftBody}>
        <p className={styles.peek}>
          {card.top}
          <span className={styles.hint}>{open ? 'Ideas' : '+ More ideas'}</span>
        </p>
        <ul>
          {card.ideas.map((idea) => (
            <li key={idea}>{idea}</li>
          ))}
        </ul>
      </div>
    </button>
  );
}

export default function TheoTurns8() {
  const { plan, gifts } = party;
  return (
    <TheHogansLayout title={party.pageTitle} description={party.sub} hideNavBar>
      <Head>
        <meta name="robots" content="noindex" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Nunito:wght@500;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.root}>
        <header className={styles.hero}>
          {STARS.map((star, i) => (
            <Star key={i} className={styles.star} star={star} />
          ))}
          <div className={`${styles.wrap} ${styles.heroWrap}`}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>{party.eyebrow}</p>
              <h1>
                {party.title.before} <span>{party.title.highlight}</span>{' '}
                {party.title.after}
              </h1>
              <p className={styles.sub}>{party.sub}</p>
              <Countdown />
            </div>
            <div className={styles.badge} aria-hidden="true">
              <Helmet className={styles.helmet} />
              <div className={styles.eight}>8</div>
            </div>
          </div>
        </header>

        <div>
          <section
            className={`${styles.wrap} ${styles.facts}`}
            aria-labelledby="facts-h"
          >
            <h2 id="facts-h">The Party Details</h2>
            <div className={styles.ticket}>
              <div className={styles.fact}>
                <span className={styles.label}>When</span>
                <span className={styles.value}>{party.whenLabel}</span>
                <span className={styles.note}>{party.timeLabel}</span>
                <div className={styles.btnRow}>
                  <a
                    className={styles.btn}
                    href={googleCalendarUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Add to Google Calendar
                  </a>
                  <CopyButton
                    text={party.eventText}
                    label="Copy event details"
                  />
                </div>
                <span className={`${styles.note} ${styles.small}`}>
                  Apple Calendar: copy the details and paste them into a new
                  event.
                </span>
              </div>
              <div className={styles.fact}>
                <span className={styles.label}>Where</span>
                <span className={styles.value}>{party.venue}</span>
                <span className={styles.note}>
                  {party.address} ·{' '}
                  <a
                    href={party.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open in Maps
                  </a>
                </span>
              </div>
              <div className={styles.fact}>
                <span className={styles.label}>Food</span>
                <span className={styles.value}>{party.food.value}</span>
                <span className={styles.note}>{party.food.note}</span>
              </div>
              <div className={styles.fact}>
                <span className={styles.label}>RSVP</span>
                <span className={styles.value}>{party.rsvp.name}</span>
                <div className={styles.btnRow}>
                  <a
                    className={`${styles.note} ${styles.phone}`}
                    href={`tel:${party.rsvp.phone.replace(/\D/g, '')}`}
                  >
                    {party.rsvp.phone}
                  </a>
                  <CopyButton text={party.rsvp.phone} label="Copy number" />
                </div>
              </div>
            </div>
          </section>

          <section
            className={`${styles.wrap} ${styles.plan}`}
            aria-labelledby="plan-h"
          >
            <div className={styles.sectionHead}>
              <p className={styles.eyebrow}>{plan.eyebrow}</p>
              <h2 id="plan-h">{plan.title}</h2>
              <p>{plan.intro}</p>
            </div>
            <div className={styles.routes}>
              {plan.routes.map((route) => (
                <article
                  key={route.kind}
                  className={`${styles.route} ${route.kind === 'dry' ? styles.dry : styles.wet}`}
                >
                  <span className={styles.tag}>
                    {route.kind === 'dry' ? <Sun /> : <Rain />}
                    {route.tag}
                  </span>
                  <h3>{route.title}</h3>
                  <ul>
                    {route.items.map((item) => (
                      <li key={item.name}>
                        <span className={styles.ic}>
                          <Icon name={item.icon} />
                        </span>
                        <span>
                          {item.name}
                          <small>{item.note}</small>
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className={styles.pizza}>
              <Pizza />
              <b>{plan.pizza.title}</b>
              <span>{plan.pizza.note}</span>
            </div>
            <p className={styles.tip}>
              <span aria-hidden="true">★</span> {plan.tip}
            </p>
          </section>

          <section
            className={`${styles.wrap} ${styles.gifts}`}
            aria-labelledby="gifts-h"
          >
            <div className={styles.sectionHead}>
              <p className={styles.eyebrow}>{gifts.eyebrow}</p>
              <h2 id="gifts-h">{gifts.title}</h2>
              <p>{gifts.intro}</p>
            </div>
            <div className={styles.chest}>
              {gifts.cards.map((card) => (
                <GiftCard key={card.title} card={card} />
              ))}
            </div>
            <p className={styles.giftFoot}>{gifts.footer}</p>
          </section>
        </div>

        <footer className={styles.footer}>
          <div className={styles.wrap}>
            <b>{party.footer.cheer}</b>
            <p>{party.footer.line}</p>
          </div>
        </footer>
      </div>
    </TheHogansLayout>
  );
}
