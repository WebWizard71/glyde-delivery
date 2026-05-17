const GLYDE_CONFIG = {
  brand: {
    name: "Glyde",
    logo: "assets/logo.png",
    brandGold: "#ECBA41",
    headerBg: "#ECBA41"
  },
  navigation: [
    { label: "Home", url: "index.html" },
    { label: "Terms & Conditions", url: "terms.html" },
    { label: "Privacy Policy", url: "privacy.html" },
    { label: "Contact Us", url: "contact.html" }
  ],
  footer: {
    copyright: "© 2026 Glyde Delivery. All rights reserved."
  },
  pages: {
    terms: {
      title: "Terms & Conditions",
      lastUpdated: "Last Updated: May 17, 2026",
      introduction: "Welcome to Glyde! Please read these Terms and Conditions carefully before using our application.",
      sections: [
        {
          heading: "1. Nature of Our Services",
          content: "Glyde is a delivery middleman system facilitating delivery coordination between users, hubs, and delivery partners. We do not operate delivery vehicles directly or employ delivery riders; we provide the platform to schedule and manage deliveries."
        },
        {
          heading: "2. Account Registration and Information",
          content: "To use our functional services, you must register using a valid phone number. We also ask for your full name. These pieces of information are strictly required to register, coordinate, and complete deliveries."
        },
        {
          heading: "3. Information Sharing",
          content: "To fulfill your deliveries, your name and phone number will be shared only with designated delivery partners and hub operators. This sharing is limited strictly to delivery operations and functional logistics."
        },
        {
          heading: "4. Payment and Fees",
          content: "Glyde does not feature any in-app payment gateway. No online transaction, card payment, or wallet funding takes place inside the app. All payments are handled externally, such as directly to the hub operator or delivery partner upon dispatch or receipt of items (cash, external bank transfers, etc.)."
        },
        {
          heading: "5. Damage and Inspection",
          content: "Because all payments are settled externally and directly, and because Glyde has no payment processing inside the app, there are no refund procedures or payment claims handled by the Glyde application itself. You must thoroughly inspect your items for damage or missing packages in front of the delivery partner before accepting and paying. Once accepted, all external transactions are final."
        },
        {
          heading: "6. Changes to Terms",
          content: "We reserve the right to update these terms at any time. Continued use of the Glyde application represents your acceptance of the updated terms."
        }
      ]
    },
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: May 17, 2026",
      introduction: "At Glyde, we take your privacy seriously. This policy describes how we collect, store, and use your information.",
      sections: [
        {
          heading: "1. Information We Collect",
          content: [
            "Phone Number: Required to authenticate your identity via Firebase Phone Auth and keep your session secure.",
            "Full Name: Required within the app to identify you and coordinate deliveries."
          ]
        },
        {
          heading: "2. How We Use Information",
          content: "We use your information strictly to provide, maintain, and support our delivery coordination system. Your name and number allow hubs to label packages correctly and enable delivery partners to find and contact you during delivery."
        },
        {
          heading: "3. Security and Storage",
          content: "Your authentication is secured with Firebase. We use industry-standard precautions to prevent unauthorized access or disclosure of your account information."
        },
        {
          heading: "4. Sharing with Third Parties",
          content: "We do not sell, rent, or lease your personal information to third parties. We share your name and phone number only with relevant hub operators and delivery partners exclusively to fulfill active orders."
        },
        {
          heading: "5. Payments",
          content: "We never collect, store, or transmit your credit card, debit card, or bank account details, as the Glyde app does not include any payment processing system. All financial transactions occur externally."
        }
      ]
    },
    contact: {
      title: "Contact Us",
      lastUpdated: "Last Updated: May 17, 2026",
      introduction: "If you have any questions, feedback, or need assistance, please feel free to contact us. We are here to help!",
      sections: [
        {
          heading: "Email Support",
          content: "You can reach us by email at:\n\nEmail: glydedeliveryservices@gmail.com"
        },
        {
          heading: "Account & Data Deletion Request",
          description: "As part of our commitment to user privacy, you have the right to request the deletion of your account and all associated data. This can be done at any time by following these steps:",
          content: [
            "Send an email to our support team at glydedeliveryservices@gmail.com.",
            "In the subject line, write: Request for Account Deletion.",
            "In the body of the email, please provide the phone number associated with the account you wish to delete.",
            "Upon receiving your request, we will once more confirm the deletion request. Once approved, we will process the deletion and send you a confirmation email."
          ]
        }
      ]
    }
  }
};
