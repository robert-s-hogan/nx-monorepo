import { Heading, Text, Button } from '@with-nx/react-ui';
import contactStyles from './contact.module.css';

/* eslint-disable-next-line */
export interface ContactProps {}

export const Contact = (props: ContactProps) => {
  return (
    <div className={`${contactStyles['container']}`}>
      <div className={`${contactStyles['stack']}`}>
        <Heading level={1}>Contact Us</Heading>
        <Text>
          Fill out the form below and we'll get back to you as soon as possible.
        </Text>
        <form>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Message:
            <textarea name="message" required></textarea>
          </label>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};
