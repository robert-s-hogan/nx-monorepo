import { Heading, Text } from '@with-nx/generic-ui';

import RSHLayout from '../components/RSHLayout';
import RSHSection from '../components/RSHSection';

export default function TermsOfService() {
  return (
    <RSHLayout
      title="Terms of Service | Robert Hogan - UI/UX Engineer"
      description="Review the terms of service for using Robert Hogan's website and services."
    >
      <RSHSection>
        <div className="space-y-6">
          <Heading level={1} text="Terms of Service" />

          <Heading level={2} text="Introduction" />
          <Text text="Welcome to RobertSHogan. By accessing and using our website, you agree to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern RobertSHogan’s relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website." />

          <Heading level={2} text="Changes to the Terms" />
          <Text text="RobertSHogan reserves the right to modify these terms of service at any time. We will notify you of significant changes by posting the new terms on our website. Your continued use of the website after any changes to these terms will constitute your acceptance of such changes." />

          <Heading level={2} text="Use of the Website" />
          <Text text="You agree to use the website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else’s use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any person, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within the website." />

          <Heading level={2} text="Intellectual Property" />
          <Text text="All content on this website, including text, graphics, logos, icons, images, and software, is the property of RobertSHogan or its content suppliers and is protected by international copyright laws. Unauthorized use of this content may violate copyright, trademark, and other laws." />

          <Heading level={2} text="User Content" />
          <Text text="By submitting content to RobertSHogan, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify, publish, and distribute such content in any media. You represent and warrant that you own or otherwise control all rights to the content you submit and that the content is accurate and not misleading." />

          <Heading level={2} text="Limitation of Liability" />
          <Text text="RobertSHogan will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your use of the website or any content on the website." />

          <Heading level={2} text="Indemnification" />
          <Text text="You agree to indemnify and hold RobertSHogan and its affiliates, officers, agents, and employees harmless from any claim or demand, including reasonable attorney’s fees, made by any third party due to or arising out of your use of the website, your violation of these terms, or your violation of any rights of another." />

          <Heading level={2} text="Governing Law" />
          <Text text="These terms of service are governed by and construed in accordance with the laws of the state of California, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location." />

          <Heading level={2} text="Contact Information" />
          <Text text="If you have any questions about these terms of service, please contact RobertSHogan at:" />
          <p>
            <a href="mailto:robert@robertshogan.com">robert@robertshogan.com</a>
          </p>
        </div>
      </RSHSection>
    </RSHLayout>
  );
}
