import { ClientResponse, MailDataRequired } from '@sendgrid/mail';

export interface SendGridModuleOptions {
  apiKey: string;
}
export class SendGridConstants {
  public static readonly SENDGRID_MODULE = 'SendGridModule';

  public static readonly SENDGRID_SERVICE = 'SENDGRID_SERVICE';

  public static readonly SENDGRID_API_KEY = 'SENDGRID_API_KEY';

  public static readonly SENDGRID_MODULE_OPTIONS = 'SENDGRID_MODULE_OPTIONS';
}

export interface ISendGridService {
  send: (data: MailDataRequired) => Promise<ClientResponse>;
}
