import { Notification } from "@application/entities/notification";
import { NotificationRepository } from "@application/repositories/notifications-repository";

export class InMemoryNotificationsRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async findById(notificationId: string): Promise<Notification | null> {
    throw new Error("Method not implemented.");
  }

  async save(notification: Notification): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
