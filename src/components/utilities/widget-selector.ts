import hero from '../hero'
import contact from '../contact'
import cta from '../cta'
import person from '../person'
import signup from '../signup'
import textSection from '../text-section'
import featurePerson from '../feature-person'
import iconSection from '../icon-section'
import infoBoxSection from '../info-box-section'
import mediaIcons from '../media-icons'
import teamSection from '../team-section'
import Reports from '../reports'


const WidgetSelector = {
  ContentfulHero: hero,
  ContentfulCallToAction: cta,
  ContentfulTextSection: textSection,
  ContentfulIconBoxSection: iconSection,
  ContentfulFeaturePerson: featurePerson,
  ContentfulInfoBoxSection: infoBoxSection,
  //ContentfulLatestArticles: blog/article-list,
  ContentfulTeamSection: teamSection,
  ContentfulMediaLogos: mediaIcons,
  ContentfulSignUpForm: signup,
  ContentfulContactForm: contact,
  ContentfulReports: Reports,
};

export default WidgetSelector;
