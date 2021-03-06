import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

import { User } from '@global/user/model';

@Entity()
export class Announcement {
	/***** columns *****/
	@PrimaryGeneratedColumn()
	public id: number;

	@Column({
		default: null,
		type: 'text'
	})
	public description: string;

	@Column({
		default: false
	})
	public important: boolean;

	@CreateDateColumn()
	public created: Timestamp;

	/***** relations *****/
	@ManyToOne(
		(type) => User,
		(user) => user.author
	)
	public author: User;

	public static mockTestAnnouncement(): Announcement {
		const announcement: Announcement = new Announcement();
		announcement.id = 1;
		announcement.important = true;
		announcement.description = 'testDescription';

		return announcement;
	}
}
