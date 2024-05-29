import { Heading, Text } from '@with-nx/generic-ui';

import RSHLayout from '../components/RSHLayout';
import RSHSection from '../components/RSHSection';

export default function PrivacyPolicy() {
  return (
    <RSHLayout
      title="Privacy Policy | Robert Hogan - UI/UX Engineer"
      description="Read the privacy policy of Robert Hogan's website to understand how your personal information is handled."
    >
      <RSHSection>
        <div className="space-y-6">
          <Heading level={1} text="Privacy Policy" />
          <Heading level={2} text="Our Commitment To Privacy" />
          <Text text="Your privacy is important to RobertSHogan. In order to better protect your privacy, RobertSHogan provides a description of our information practices, including how we collect information, why we collect it, and how it will be used." />
          <Heading level={2} text="What Information Do We Collect?" />
          <Text text="We collect information submitted through our contact forms and pages. This information must be expressly and voluntarily provided to us – RobertSHogan does not collect it without you knowingly making the decision to give it to us." />
          <Text text="Some of the information you may provide includes your name, email address, and phone number. The information is related to projects, services, and billing. Information may also be collected through phone or email conversations via official RobertSHogan representatives." />
          <Text text="In addition, RobertSHogan may collect information regarding third parties that is specifically related to you, your project, or the services you requested." />
          <Heading level={2} text="How Do We Use The Information We Collect?" />
          <Text text="The information that RobertSHogan collects is used to provide digital services to you. Some of the ways in which your information could be used by us include, but are not limited to, web support, customer service, project email updates, newsletters, and direct contact in regards to the project and services." />
          <Text text="RobertSHogan does not share information with outside parties unless it is necessary to complete the services you requested. RobertSHogan reserves the right to release applicable information following official judicial practices, such as a valid subpoena or court order." />
          <Heading level={2} text="Do We Use Cookies?" />
          <Text text="Cookies are small files that websites place on individual computer hard drives through web browsers. Users must explicitly allow cookies to be placed by every website that uses them. Cookies enable a website to remember a specific browser and capture and retain particular information." />
          <Text text="RobertSHogan uses cookies to remember, understand, and save your preferences for upcoming visits to our website. Cookies help us gather data regarding website traffic, engagement, and interactions, and enable us to provide better future online experiences, tools, and services." />
          <Text text="The information that our cookies collect has no personal information that can identify you specifically. Conversely, the anonymous information captured by the cookies is transmitted to Google, where it is used to create anonymous web activity reporting only for the domain https://www.robertshogan.com/. The data is used to gain insight into how to optimize customer experience, content, and marketing efforts for https://www.robertshogan.com/." />
          <Text text="In addition, no personally identifiable information will be collected on this website unless explicitly submitted through a fill-in form, such as our Work With Us page." />
          <Heading level={2} text="Remarketing" />
          <Text text="RobertSHogan uses cookies to display remarketing advertisements. These are based on a user’s prior visits to https://www.robertshogan.com/ and may be seen throughout other websites on the Internet." />
          <Text text="Users can opt out of cookies through Google at any point by visiting Google Ads Preferences Manager." />
          <Heading level={2} text="Third-Party Websites" />
          <Text text="RobertSHogan’s website may provide links to third-party websites. RobertSHogan does not have control over these websites or their content, which have their own unique and independent privacy policies. Thus, we do not assume any responsibility or liability for those websites." />
          <Text text="RobertSHogan also does not endorse these websites, including the information and products found on them. If you choose to visit one of the third-party websites linked on this website, it is done at your own discretion and risk." />
          <Heading
            level={2}
            text="RobertSHogan Is Committed To Data Security"
          />
          <Text text="In order to maintain data security, proper use of information, and information accuracy, RobertSHogan has appropriate practices in place to safeguard the information we collect online and offline, including electronic and managerial conduct." />
          <Text text="Every online credit card transaction is only performed on secure servers through a secure SSL connection. They also comply with the latest standards in the industry. All billing information, including credit card information, is deleted immediately following the termination or completion of a client project." />
          <Heading
            level={2}
            text="RobertSHogan Is Committed To Protecting Children’s Privacy Online"
          />
          <Text text="RobertSHogan is committed to protecting children’s privacy. Therefore, we do not collect or maintain information at our website from those we actually know are under 13. Our website is also not structured to attract anyone under the age of 13 and is not intended for users under the age of 18." />
          <Text text="If we become aware that anyone under the age of 18 has submitted personal information to our website, RobertSHogan will delete that information and will not use it for any purpose whatsoever." />
          <Text text="RobertSHogan encourages parents and legal guardians to discuss the possible risks of offering personal information through the Internet with their children." />
          <Heading level={2} text="Our Privacy Policy and Your Consent" />
          <Text text="By using our website, you consent to RobertSHogan’s privacy policy." />
          <Text text="If we have any changes to our privacy policy, they will be posted on this web page." />
          <Heading level={2} text="Your Privacy Choices and Rights" />
          <Text text="You do not need to provide any personal information in order to enjoy the majority of the features on our website. In addition, you can opt out of certain activities by sending us an opt-out email or by opting out within the activities themselves." />
          <Heading level={2} text="Contacting RobertSHogan" />
          <Text text="If you have any questions regarding our privacy policy, please contact RobertSHogan at:" />
          <p>
            <a href="mailto:robert@robertshogan.com">robert@robertshogan.com</a>
          </p>
        </div>
      </RSHSection>
    </RSHLayout>
  );
}
