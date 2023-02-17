import {
  Configuration,
  EmailsApi,
  EmailMessageData,
} from '@elasticemail/elasticemail-client-ts-axios';
import { User } from 'src/community/interface/user.interface';

const config = new Configuration({
  apiKey:
    '9E0EA74DB06EEBD664CA187040AB3ED44EB329B1F3FFE1BEE96BA684BF4F2A456450CC7CD14D3CBA70D000823BD96FF5',
});

const emailsApi = new EmailsApi(config);

export function sendEmail(user: User, message, subject) {
  const emailMessageData: EmailMessageData = {
    Recipients: [
      {
        Email: `${user.email}`,
        Fields: {
          name: `${user.fullName}`,
        },
      },
    ],
    Content: {
      Body: [
        {
          ContentType: 'PlainText',
          Charset: 'utf-8',
          Content: `Hi {name}, ${message}`,
        },
      ],
      From: 'obinnaedmund121@gmail.com',
      Subject: `${subject}`,
    },
  };
  emailsApi
    .emailsPost(emailMessageData)
    .then((response) => {
      console.log('Api called successfully');
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
}
