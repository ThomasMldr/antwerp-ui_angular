import { Component, Input, EventEmitter, Output } from '@angular/core';
import { UserMenu, uri } from './../../interfaces';
import { Flyout, FlyoutSize } from '@acpaas-ui/ngx-components/flyout';

@Component({
	selector: 'aui-user-menu',
	templateUrl: './user-menu.component.html',
	styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent {
	@Input()
	user?: UserMenu.IUser = null;
	@Input()
	direction: UserMenu.direction = 'right';
	@Input()
	flyoutSize: Flyout.EFlyoutSize = FlyoutSize.Small;
	@Input()
	notificationsCount: number = null;
	@Input()
	showLogoutButton = true;
	@Input()
	translations: UserMenu.ITranslations = {
		login: 'Aanmelden',
		logout: 'Afmelden',
		loginAlt: 'Klik hier om aan te melden met uw A-profiel',
		logoutAlt: 'Klik hier om af te melden',
	};

	@Output()
	logout$: EventEmitter<void> = new EventEmitter();
	@Output()
	login$: EventEmitter<void> = new EventEmitter();
}
