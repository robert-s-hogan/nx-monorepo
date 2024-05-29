import { Heading, Text } from '@with-nx/generic-ui';

import RSHLayout from '../components/RSHLayout';
import RSHSection from '../components/RSHSection';

export default function Accessibility() {
  return (
    <RSHLayout
      title="Accessibility Statement | Robert Hogan - UI/UX Engineer"
      description="Read the accessibility statement to learn how Robert Hogan's website is designed to be inclusive and accessible to all users."
    >
      <RSHSection>
        <div className="space-y-6">
          <Heading level={1} text="Accessibility Statement" />
          <Heading level={2} text="Our tech team is on it!" />
          <Text text="At RobertSHogan, we believe in crafting digital experiences that resonate with creativity and innovation. Our website is no exception — we are putting in the effort to ensure it is not only visually stunning but also accessible to everyone." />

          <Heading level={2} text="Features Making Our Website Accessible:" />
          <Text text="We’ve added cool stuff to make the website more accessible, like:" />
          <ul className="list-disc ml-10 space-y-2">
            <li>
              <Text text="Easy Keyboard Navigation: You can get around our site using just the keyboard, so no worries if using a mouse is tricky for you." />
            </li>
            <li>
              <Text text="Clear Focus Indicators: We made sure interactive stuff like links and forms are easy to see, so you always know where you are." />
            </li>
            <li>
              <Text text="Adjustable Text Size: You can zoom the page size to your liking without the layout breaking. Reading should be comfy for everyone." />
            </li>
            <li>
              <Text text="Consistent and Clear Layout: We want you to find things easily, no matter what you’re using to browse the site." />
            </li>
            <li>
              <Text text="Accessible Forms: Our forms are designed to be straightforward. We’re here to help, not confuse you." />
            </li>
            <li>
              <Text text="Colors that Work: We’ve picked colors that are easy on the eyes, so you can read without any trouble." />
            </li>
          </ul>

          <Heading level={2} text="Things We Plan to Improve in Our Website:" />
          <Text text="Assistive Tech: We’ll test our site with different assistive technologies, so you navigate without a hitch." />
          <Text text="Alt Text for Images: We’ll add descriptions to our images, so you know what they’re all about." />
          <Text text="Skip to Main Content: We will put skip links to help you skip the repetitive stuff and get straight to the good parts." />
          <Text text="We Plan to Make our Website Screen Reader Friendly: Our website should work great with popular screen reader software. We’ll design it to talk to you." />
          <Text text="Enhancing Keyboard Navigation: We acknowledge that certain areas of the website are currently inaccessible via keyboard alone. Rest assured, we are actively addressing this issue." />

          <Heading level={2} text="Your Feedback Matters:" />
          <Text text="At RobertSHogan, we’re not just committed to continuous improvement; we see accessibility as an ever-evolving journey. Your feedback is like the compass guiding us on this dynamic path." />
          <Text text="If you encounter any challenges or have suggestions for enhancing accessibility, please reach out to us at our Contact Form Page." />
          <Text text="We’re always eager to hear from you. As technology advances, so do our efforts to adapt and ensure our digital realm remains inclusive. Your insights play a crucial role in shaping the future of accessibility on our platform." />

          <Heading level={2} text="Thank You for Choosing RobertSHogan:" />
          <Text text="Thank you for choosing RobertSHogan as your digital agency. We’re thrilled to have you on board and look forward to continuing to create digital experiences that leave a lasting impact." />
          <Text text="Stay creative, stay connected, and thank you for being a part of the RobertSHogan journey!" />
        </div>
      </RSHSection>
    </RSHLayout>
  );
}
