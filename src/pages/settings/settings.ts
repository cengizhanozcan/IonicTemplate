import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';

import { SettingsService } from '../../providers/settings-service';

import { TranslateService } from '@ngx-translate/core';

/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  url: String;

  constructor(public navCtrl: NavController,
    public settingsService: SettingsService) {
  }
 
  save(){
    if(!this.url){

    }
    this.settingsService.save(this.url);
  }

  ionViewDidLoad() { 
    this.url = this.settingsService.url;
  }
 
  ngOnChanges() {
    console.log('Ng All Changes');
  }
}
