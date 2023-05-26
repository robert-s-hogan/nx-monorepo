import { Heading, Text, Button } from '@with-nx/react-ui';

/* eslint-disable-next-line */
export interface ContactProps {}

export function Contact(props: ContactProps) {
  return (
    <div className="p-4">
      <div className="flex flex-col space-y-4">
        <Heading level={1}>Contact Us</Heading>
        <Text>
          Fill out the form below and we'll get back to you as soon as possible.
        </Text>
        <form className="flex flex-col space-y-4">
          <label>
            Name:
            <input type="text" name="name" required className="border p-2" />
          </label>
          <label>
            Email:
            <input type="email" name="email" required className="border p-2" />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              required
              className="border p-2 h-32"
            ></textarea>
          </label>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
