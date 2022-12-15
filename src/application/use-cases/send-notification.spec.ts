import { randomUUID } from 'crypto';
import { Notification } from '../entities/notification';
import { SendNotification } from './send-notification';

const notifications: Notification[] = [];

const notificationRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification(notificationRepository);

    await sendNotification.execute({
      recipientId: randomUUID(),
      content: 'This is a notification',
      category: 'social',
    });

    expect(notifications).toHaveLength(1);
  });
});
