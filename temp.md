below is like constants from flutter app -- use the text from there


import 'package:glyde/shared/constants/strings/i_footer_strings.dart';

class EnFooterStrings implements IFooterStrings {
  @override
  String get termsAndConditions => 'Terms and Conditions';

  @override
  String get privacyPolicy => 'Privacy Policy';

  @override
  String get termsContent =>
      'Terms & Conditions\n'
      'Last Updated: May 17, 2026\n\n'
      'Welcome to Glyde! Please read these Terms and Conditions carefully before using our application.\n\n'
      '1. Nature of Our Services\n'
      'Glyde is a delivery middleman system facilitating delivery coordination between users, hubs, and delivery partners. We do not operate delivery vehicles directly or employ delivery riders; we provide the platform to schedule and manage deliveries.\n\n'
      '2. Account Registration and Information\n'
      'To use our functional services, you must register using a valid phone number. We also ask for your full name. These pieces of information are strictly required to register, coordinate, and complete deliveries.\n\n'
      '3. Information Sharing\n'
      'To fulfill your deliveries, your name and phone number will be shared only with designated delivery partners and hub operators. This sharing is limited strictly to delivery operations and functional logistics.\n\n'
      '4. Payment and Fees\n'
      'Glyde does not feature any in-app payment gateway. No online transaction, card payment, or wallet funding takes place inside the app. All payments are handled externally, such as directly to the hub operator or delivery partner upon dispatch or receipt of items (cash, external bank transfers, etc.).\n\n'
      '5. Damage and Inspection\n'
      'Because all payments are settled externally and directly, and because Glyde has no payment processing inside the app, there are no refund procedures or payment claims handled by the Glyde application itself. You must thoroughly inspect your items for damage or missing packages in front of the delivery partner before accepting and paying. Once accepted, all external transactions are final.\n\n'
      '6. Changes to Terms\n'
      'We reserve the right to update these terms at any time. Continued use of the Glyde application represents your acceptance of the updated terms.';

  @override
  String get privacyContent =>
      'Privacy Policy\n'
      'Last Updated: May 17, 2026\n\n'
      'At Glyde, we take your privacy seriously. This policy describes how we collect, store, and use your information.\n\n'
      '1. Information We Collect\n'
      '• Phone Number: Required to authenticate your identity via Firebase Phone Auth and keep your session secure.\n'
      '• Full Name: Required within the app to identify you and coordinate deliveries.\n\n'
      '2. How We Use Information\n'
      'We use your information strictly to provide, maintain, and support our delivery coordination system. Your name and number allow hubs to label packages correctly and enable delivery partners to find and contact you during delivery.\n\n'
      '3. Security and Storage\n'
      'Your authentication is secured with Firebase. We use industry-standard precautions to prevent unauthorized access or disclosure of your account information.\n\n'
      '4. Sharing with Third Parties\n'
      'We do not sell, rent, or lease your personal information to third parties. We share your name and phone number only with relevant hub operators and delivery partners exclusively to fulfill active orders.\n\n'
      '5. Payments\n'
      'We never collect, store, or transmit your credit card, debit card, or bank account details, as the Glyde app does not include any payment processing system. All financial transactions occur externally.';

  @override
  String get copyright => '© 2026 Glyde Delivery. All rights reserved.';
}
