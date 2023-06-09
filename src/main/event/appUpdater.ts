/* eslint lines-between-class-members: off */

import type { BrowserWindow } from 'electron';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';
import { config } from 'dotenv';
import updateState from '../store/updateState';
import type { SendStatusToRendererType } from '../types/Events/AppUpdater';

config({ path: '.env' });

export default class AppUpdater {
    private window: BrowserWindow;
    constructor(window: BrowserWindow) {
        this.window = window;
        const sendStatusToRenderer = (datas: SendStatusToRendererType) => {
            this.window.webContents.send('appUpdaterMessage', datas);
        };
        this.window.webContents.once('did-finish-load', () => {
            sendStatusToRenderer({ status: 'checking-for-update', data: 'Checking For Update...' });
        });
        if (process.env.NODE_ENV === 'development') {
            sendStatusToRenderer({ status: 'checking-for-update', data: 'Skip confirmation of update' });
            updateState.set({ isUpdate: false });
            setTimeout(() => {
                this.window.hide();
                this.window.destroy();
            }, 5000);
        }
        log.transports.file.level = 'info';
        autoUpdater.logger = log;
        autoUpdater.setFeedURL({
            provider: 'github',
            owner: 'ito-rui',
            repo: 'electron-react-desktop-app',
            // private: true,
            // token: process.env.GH_TOKEN as string, // Repo Scope Permission
        });
        autoUpdater.checkForUpdates();
        autoUpdater.on('checking-for-update', () => {
            sendStatusToRenderer({ status: 'checking-for-update', data: 'Checking for update...' });
        });
        autoUpdater.on('update-available', (info) => {
            sendStatusToRenderer({ status: 'update-available', data: `New Versions(${info.version}) Found !` });
        });
        autoUpdater.on('update-not-available', () => {
            sendStatusToRenderer({ status: 'update-not-available', data: 'Starting...' });
            updateState.set({ isShowMainWindow: true });
            setTimeout(() => {
                this.window.hide();
                this.window.destroy();
            }, 5000);
        });
        autoUpdater.on('download-progress', (info) => {
            sendStatusToRenderer({ status: 'download-progress', data: info.percent });
        });
        autoUpdater.on('update-downloaded', () => {
            sendStatusToRenderer({ status: 'update-downloaded', data: 'Download Complete !' });
            updateState.set({ isShowMainWindow: false });
            autoUpdater.quitAndInstall();
        });
        autoUpdater.on('error', (err) => {
            log.error(process.pid, err);
            sendStatusToRenderer({ status: 'error', data: err.message });
        });
    }
}
