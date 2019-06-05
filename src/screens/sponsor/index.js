import React from "react";
import { Text, SectionList } from "react-native";
import { SafeAreaView } from "react-navigation";

import styles from "./styles";
import SponsorCard from "../../components/sponsorCard";
import IconWrapper from "../../components/iconWrapper";

export default class Sponsor extends React.Component {
  static navigationOptions = {
    title: "Sponsors"
  };

  render() {
    return (
      <SectionList
        contentContainerStyle={styles.container}
        renderItem={({ item, index, section }) => (
          <SponsorCard key={index} {...item} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.title}>{title}</Text>
        )}
        sections={[
          { title: "Organizer", data: organizers },
          { title: "Co-Host", data: coHost },
          { title: "Sponsors", data: sponsors },
          { title: "Partners", data: partners }
        ]}
        keyExtractor={(item, index) => item + index}
      />
    );
  }
}

//dummy data
const organizers = [
  {
    jobSiteLink: "https://facebook.github.io/react-native/",
    logoUrl:
      "https://i2.wp.com/www.cis.fiu.edu/wp-content/uploads/2018/01/UPE_google-1.png?fit=640%2C360&ssl=1",
    type: "Organizer",
    description:
      '"At Microsoft, we know that having a diverse workforce which includes people with disabilities is essential if we are going to deliver on our mission to empower every person and every organization on the planet to achieve more. Our Autism Hiring Program, Ability Hiring events, and inclusive interviews enable all candidates to showcase their skills and bring their best selves."'
  }
];
const coHost = [
  {
    jobSiteLink: "https://facebook.github.io/react-native/",
    logoUrl:
      "https://zdnet3.cbsistatic.com/hub/i/r/2014/08/27/0d77a99a-2da9-11e4-9e6a-00505685119a/resize/570x428/9c14ac223374e81816a3973dcbd3f661/microsofts-logo-gets-a-makeover.jpg",
    type: "Organizer",
    description:
      '"At Microsoft, we know that having a diverse workforce which includes people with disabilities is essential if we are going to deliver on our mission to empower every person and every organization on the planet to achieve more. Our Autism Hiring Program, Ability Hiring events, and inclusive interviews enable all candidates to showcase their skills and bring their best selves."'
  }
];

const sponsors = [
  {
    jobSiteLink: "https://facebook.github.io/react-native/",
    logoUrl:
      "https://i2.wp.com/www.cis.fiu.edu/wp-content/uploads/2018/01/UPE_google-1.png?fit=640%2C360&ssl=1",
    type: "Organizer",
    description:
      '"At Microsoft, we know that having a diverse workforce which includes people with disabilities is essential if we are going to deliver on our mission to empower every person and every organization on the planet to achieve more. Our Autism Hiring Program, Ability Hiring events, and inclusive interviews enable all candidates to showcase their skills and bring their best selves."'
  },
  {
    jobSiteLink: "https://facebook.github.io/react-native/",
    logoUrl:
      "https://i2.wp.com/www.cis.fiu.edu/wp-content/uploads/2018/01/UPE_google-1.png?fit=640%2C360&ssl=1",
    type: "Organizer",
    description:
      '"At Microsoft, we know that having a diverse workforce which includes people with disabilities is essential if we are going to deliver on our mission to empower every person and every organization on the planet to achieve more. Our Autism Hiring Program, Ability Hiring events, and inclusive interviews enable all candidates to showcase their skills and bring their best selves."'
  },
  {
    jobSiteLink: "https://facebook.github.io/react-native/",
    logoUrl:
      "https://i2.wp.com/www.cis.fiu.edu/wp-content/uploads/2018/01/UPE_google-1.png?fit=640%2C360&ssl=1",
    type: "Organizer",
    description:
      '"At Microsoft, we know that having a diverse workforce which includes people with disabilities is essential if we are going to deliver on our mission to empower every person and every organization on the planet to achieve more. Our Autism Hiring Program, Ability Hiring events, and inclusive interviews enable all candidates to showcase their skills and bring their best selves."'
  },
  {
    jobSiteLink: "https://facebook.github.io/react-native/",
    logoUrl:
      "https://i2.wp.com/www.cis.fiu.edu/wp-content/uploads/2018/01/UPE_google-1.png?fit=640%2C360&ssl=1",
    type: "Organizer",
    description:
      '"At Microsoft, we know that having a diverse workforce which includes people with disabilities is essential if we are going to deliver on our mission to empower every person and every organization on the planet to achieve more. Our Autism Hiring Program, Ability Hiring events, and inclusive interviews enable all candidates to showcase their skills and bring their best selves."'
  },
  {
    jobSiteLink: "https://facebook.github.io/react-native/",
    logoUrl:
      "https://i2.wp.com/www.cis.fiu.edu/wp-content/uploads/2018/01/UPE_google-1.png?fit=640%2C360&ssl=1",
    type: "Organizer",
    description:
      '"At Microsoft, we know that having a diverse workforce which includes people with disabilities is essential if we are going to deliver on our mission to empower every person and every organization on the planet to achieve more. Our Autism Hiring Program, Ability Hiring events, and inclusive interviews enable all candidates to showcase their skills and bring their best selves."'
  },
  {
    jobSiteLink: "https://facebook.github.io/react-native/",
    logoUrl:
      "https://i2.wp.com/www.cis.fiu.edu/wp-content/uploads/2018/01/UPE_google-1.png?fit=640%2C360&ssl=1",
    type: "Organizer",
    description:
      '"At Microsoft, we know that having a diverse workforce which includes people with disabilities is essential if we are going to deliver on our mission to empower every person and every organization on the planet to achieve more. Our Autism Hiring Program, Ability Hiring events, and inclusive interviews enable all candidates to showcase their skills and bring their best selves."'
  },
  {
    jobSiteLink: "https://facebook.github.io/react-native/",
    logoUrl:
      "https://i2.wp.com/www.cis.fiu.edu/wp-content/uploads/2018/01/UPE_google-1.png?fit=640%2C360&ssl=1",
    type: "Organizer",
    description:
      '"At Microsoft, we know that having a diverse workforce which includes people with disabilities is essential if we are going to deliver on our mission to empower every person and every organization on the planet to achieve more. Our Autism Hiring Program, Ability Hiring events, and inclusive interviews enable all candidates to showcase their skills and bring their best selves."'
  },
  {
    jobSiteLink: "https://facebook.github.io/react-native/",
    logoUrl:
      "https://i2.wp.com/www.cis.fiu.edu/wp-content/uploads/2018/01/UPE_google-1.png?fit=640%2C360&ssl=1",
    type: "Organizer",
    description:
      '"At Microsoft, we know that having a diverse workforce which includes people with disabilities is essential if we are going to deliver on our mission to empower every person and every organization on the planet to achieve more. Our Autism Hiring Program, Ability Hiring events, and inclusive interviews enable all candidates to showcase their skills and bring their best selves."'
  },
  {
    jobSiteLink: "https://facebook.github.io/react-native/",
    logoUrl:
      "https://i2.wp.com/www.cis.fiu.edu/wp-content/uploads/2018/01/UPE_google-1.png?fit=640%2C360&ssl=1",
    type: "Organizer",
    description:
      '"At Microsoft, we know that having a diverse workforce which includes people with disabilities is essential if we are going to deliver on our mission to empower every person and every organization on the planet to achieve more. Our Autism Hiring Program, Ability Hiring events, and inclusive interviews enable all candidates to showcase their skills and bring their best selves."'
  },
  {
    jobSiteLink: "https://facebook.github.io/react-native/",
    logoUrl:
      "https://i2.wp.com/www.cis.fiu.edu/wp-content/uploads/2018/01/UPE_google-1.png?fit=640%2C360&ssl=1",
    type: "Organizer",
    description:
      '"At Microsoft, we know that having a diverse workforce which includes people with disabilities is essential if we are going to deliver on our mission to empower every person and every organization on the planet to achieve more. Our Autism Hiring Program, Ability Hiring events, and inclusive interviews enable all candidates to showcase their skills and bring their best selves."'
  }
];

const partners = [
  {
    jobSiteLink: "https://facebook.github.io/react-native/",
    logoUrl:
      "https://i2.wp.com/www.cis.fiu.edu/wp-content/uploads/2018/01/UPE_google-1.png?fit=640%2C360&ssl=1",
    type: "Organizer",
    description:
      '"At Microsoft, we know that having a diverse workforce which includes people with disabilities is essential if we are going to deliver on our mission to empower every person and every organization on the planet to achieve more. Our Autism Hiring Program, Ability Hiring events, and inclusive interviews enable all candidates to showcase their skills and bring their best selves."'
  },
  {
    jobSiteLink: "https://facebook.github.io/react-native/",
    logoUrl:
      "https://i2.wp.com/www.cis.fiu.edu/wp-content/uploads/2018/01/UPE_google-1.png?fit=640%2C360&ssl=1",
    type: "Organizer",
    description:
      '"At Microsoft, we know that having a diverse workforce which includes people with disabilities is essential if we are going to deliver on our mission to empower every person and every organization on the planet to achieve more. Our Autism Hiring Program, Ability Hiring events, and inclusive interviews enable all candidates to showcase their skills and bring their best selves."'
  },
  {
    jobSiteLink: "https://facebook.github.io/react-native/",
    logoUrl:
      "https://i2.wp.com/www.cis.fiu.edu/wp-content/uploads/2018/01/UPE_google-1.png?fit=640%2C360&ssl=1",
    type: "Organizer",
    description:
      '"At Microsoft, we know that having a diverse workforce which includes people with disabilities is essential if we are going to deliver on our mission to empower every person and every organization on the planet to achieve more. Our Autism Hiring Program, Ability Hiring events, and inclusive interviews enable all candidates to showcase their skills and bring their best selves."'
  },
  {
    jobSiteLink: "https://facebook.github.io/react-native/",
    logoUrl:
      "https://i2.wp.com/www.cis.fiu.edu/wp-content/uploads/2018/01/UPE_google-1.png?fit=640%2C360&ssl=1",
    type: "Organizer",
    description:
      '"At Microsoft, we know that having a diverse workforce which includes people with disabilities is essential if we are going to deliver on our mission to empower every person and every organization on the planet to achieve more. Our Autism Hiring Program, Ability Hiring events, and inclusive interviews enable all candidates to showcase their skills and bring their best selves."'
  },
  {
    jobSiteLink: "https://facebook.github.io/react-native/",
    logoUrl:
      "https://i2.wp.com/www.cis.fiu.edu/wp-content/uploads/2018/01/UPE_google-1.png?fit=640%2C360&ssl=1",
    type: "Organizer",
    description:
      '"At Microsoft, we know that having a diverse workforce which includes people with disabilities is essential if we are going to deliver on our mission to empower every person and every organization on the planet to achieve more. Our Autism Hiring Program, Ability Hiring events, and inclusive interviews enable all candidates to showcase their skills and bring their best selves."'
  },
  {
    jobSiteLink: "https://facebook.github.io/react-native/",
    logoUrl:
      "https://i2.wp.com/www.cis.fiu.edu/wp-content/uploads/2018/01/UPE_google-1.png?fit=640%2C360&ssl=1",
    type: "Organizer",
    description:
      '"At Microsoft, we know that having a diverse workforce which includes people with disabilities is essential if we are going to deliver on our mission to empower every person and every organization on the planet to achieve more. Our Autism Hiring Program, Ability Hiring events, and inclusive interviews enable all candidates to showcase their skills and bring their best selves."'
  },
  {
    jobSiteLink: "https://facebook.github.io/react-native/",
    logoUrl:
      "https://i2.wp.com/www.cis.fiu.edu/wp-content/uploads/2018/01/UPE_google-1.png?fit=640%2C360&ssl=1",
    type: "Organizer",
    description:
      '"At Microsoft, we know that having a diverse workforce which includes people with disabilities is essential if we are going to deliver on our mission to empower every person and every organization on the planet to achieve more. Our Autism Hiring Program, Ability Hiring events, and inclusive interviews enable all candidates to showcase their skills and bring their best selves."'
  },
  {
    jobSiteLink: "https://facebook.github.io/react-native/",
    logoUrl:
      "https://i2.wp.com/www.cis.fiu.edu/wp-content/uploads/2018/01/UPE_google-1.png?fit=640%2C360&ssl=1",
    type: "Organizer",
    description:
      '"At Microsoft, we know that having a diverse workforce which includes people with disabilities is essential if we are going to deliver on our mission to empower every person and every organization on the planet to achieve more. Our Autism Hiring Program, Ability Hiring events, and inclusive interviews enable all candidates to showcase their skills and bring their best selves."'
  },
  {
    jobSiteLink: "https://facebook.github.io/react-native/",
    logoUrl:
      "https://i2.wp.com/www.cis.fiu.edu/wp-content/uploads/2018/01/UPE_google-1.png?fit=640%2C360&ssl=1",
    type: "Organizer",
    description:
      '"At Microsoft, we know that having a diverse workforce which includes people with disabilities is essential if we are going to deliver on our mission to empower every person and every organization on the planet to achieve more. Our Autism Hiring Program, Ability Hiring events, and inclusive interviews enable all candidates to showcase their skills and bring their best selves."'
  },
  {
    jobSiteLink: "https://facebook.github.io/react-native/",
    logoUrl:
      "https://i2.wp.com/www.cis.fiu.edu/wp-content/uploads/2018/01/UPE_google-1.png?fit=640%2C360&ssl=1",
    type: "Organizer",
    description:
      '"At Microsoft, we know that having a diverse workforce which includes people with disabilities is essential if we are going to deliver on our mission to empower every person and every organization on the planet to achieve more. Our Autism Hiring Program, Ability Hiring events, and inclusive interviews enable all candidates to showcase their skills and bring their best selves."'
  },
  {
    jobSiteLink: "https://facebook.github.io/react-native/",
    logoUrl:
      "https://i2.wp.com/www.cis.fiu.edu/wp-content/uploads/2018/01/UPE_google-1.png?fit=640%2C360&ssl=1",
    type: "Organizer",
    description:
      '"At Microsoft, we know that having a diverse workforce which includes people with disabilities is essential if we are going to deliver on our mission to empower every person and every organization on the planet to achieve more. Our Autism Hiring Program, Ability Hiring events, and inclusive interviews enable all candidates to showcase their skills and bring their best selves."'
  },
  {
    jobSiteLink: "https://facebook.github.io/react-native/",
    logoUrl:
      "https://i2.wp.com/www.cis.fiu.edu/wp-content/uploads/2018/01/UPE_google-1.png?fit=640%2C360&ssl=1",
    type: "Organizer",
    description:
      '"At Microsoft, we know that having a diverse workforce which includes people with disabilities is essential if we are going to deliver on our mission to empower every person and every organization on the planet to achieve more. Our Autism Hiring Program, Ability Hiring events, and inclusive interviews enable all candidates to showcase their skills and bring their best selves."'
  },
  {
    jobSiteLink: "https://facebook.github.io/react-native/",
    logoUrl:
      "https://i2.wp.com/www.cis.fiu.edu/wp-content/uploads/2018/01/UPE_google-1.png?fit=640%2C360&ssl=1",
    type: "Organizer",
    description:
      '"At Microsoft, we know that having a diverse workforce which includes people with disabilities is essential if we are going to deliver on our mission to empower every person and every organization on the planet to achieve more. Our Autism Hiring Program, Ability Hiring events, and inclusive interviews enable all candidates to showcase their skills and bring their best selves."'
  },
  {
    jobSiteLink: "https://facebook.github.io/react-native/",
    logoUrl:
      "https://i2.wp.com/www.cis.fiu.edu/wp-content/uploads/2018/01/UPE_google-1.png?fit=640%2C360&ssl=1",
    type: "Organizer",
    description:
      '"At Microsoft, we know that having a diverse workforce which includes people with disabilities is essential if we are going to deliver on our mission to empower every person and every organization on the planet to achieve more. Our Autism Hiring Program, Ability Hiring events, and inclusive interviews enable all candidates to showcase their skills and bring their best selves."'
  }
];
