## Electron React Desktop App

### Edit RootDir in [packege.json](packge.json)

```json
{
    "description": "Your App Description",
    "repository": {
        "type": "git",
        "url": "git+https://github.com/{AuthorName}/{RepositoryName}.git"
    },
    "author": {
        "name": "AuthorName"
    },
    "build": {
        "productName": "ProductName",
        "appId": "ID created with AppleDeveloper"
    },
    "publish": {
        "provider": "github",
        "owner": "AuthorName",
        "repo": "RepositoryName"
    }
}
```

### Edit ReleseDir in [packge.json](release/app/packge.json)

```json
{
    "name": "RepositoryName",
    "version": "0.1.0",
    "description": "Your App Description",
    "license": "MIT",
    "author": {
        "name": "AuthorName"
    }
}
```

### QuickStart

1. #### Install

    ```bash
    npm install
    ```

2. #### Build

    ```bash
    npm run build
    ```

3. #### Start

    ```bash
    npm start
    ```

### Env Registration

-   #### Create .env

    ```bash
    touch .env
    ```

-   #### MongoDB

    ```bash
    echo "MONGODB_URI=My MongoDB URI" > .env
    ```

-   #### Edit [prod.ts](.erb/configs/webpack.config.main.prod.ts)

    ```typescript
    new webpack.DefinePlugin({
        'process.type': '"browser"',
        'process.env.MONGODB_URI': JSON.stringify(process.env.MONGODB_URI),
        'process.env.GH_TOKEN': JSON.stringify(process.env.GH_TOKEN),
    }),
    ```

-   #### Read .env DevMode

    ```typescript
    import { config } from 'dotenv';
    config();
    console.log(process.env.MONGODB_URI);
    ```

### Application Packaging

1. #### Create DevelopmentID

    - #### Sign up for the AppleDeveloperProgram ($100 per year)

    - #### Create a DevelopID from Xcode

2. #### Create [DeveloperApplicationID](https://developer.apple.com/account/resources/certificates/add)

    - #### Software => Developer ID Application

    - #### Select a Developer ID Certificate Intermediary => Previous Sub-CA

    - #### Choose File => DeveloperID file (.p12) created in Xcode

    - #### Download and Launch

3. #### Create [Developer InstallerID](https://developer.apple.com/account/resources/certificates/add)

    - #### Software => Developer ID Installer

    - #### Select a Developer ID Certificate Intermediary => Previous Sub-CA

    - #### Choose File => DeveloperID file (.p12) created in Xcode

    - #### Download and Launch

4. #### Create [AppID](https://developer.apple.com/account/resources/identifiers/list)

    - #### Register a new identifier => App IDs

    - #### Select a type => App

    - #### Description => Description of App ID

    - #### App ID Prefix => ID of any application (com.{SecondName}.{AppName0}.{AppName2})

5. #### Create [Profile](https://developer.apple.com/account/resources/profiles/add)

    - #### Register a New Provisioning Profile => macOS App Development

    - #### Profile Type => macOS

    - #### AppID => The ID you just created

    - #### Download and Launch

6. #### Register `APPLE_ID` in Github environment variable

7. #### Register `APPLE_ID_PASS` in Github enviroment variable

    - #### Create [AppleIDPassword](https://appleid.apple.com/account/manage)

    - #### Select Password for App

8. #### Hash the `certificate.p12` file issued by the keychain and register it in the Guthub environment variable with `CSC_LINK` and `CSC_INSTALLER_LINK`

    - #### Issue a certificate with `.p12` extension for the `Developer InstallerID` and `Developer ApplicationID` you just created in your keychain

        ```bash
        openssl sha1 certificate.p12
        ```

    - #### Register output results to Github environment variables

9. #### Register the password for `certificate.p12` set in the keychain with `CSC_KEY_PASSWORD` and `CSC_INSTALLER_KEY_PASSWORD` in the Github environment variable

    - #### Register the password you decided when issuing the certificate (p.12) file in the Github environment variable.

10. #### Issue a new access token in Github and register it with the Github environment variable `GH_TOKEN`

11. #### Register for `.env`

    ```txt
    process.env.GH_TOKEN = GH_TOKEN
    ```

### AutoUpdate

-   #### Edit [appUpdater.ts](src/main/event/appUpdater.ts)

    -   #### When done in a private repository

        ```typescript
        autoUpdater.setFeedURL({
            provider: 'github',
            owner: 'AuthorName',
            repo: 'RepositoryName',
            private: true,
            token: process.env.GH_TOKEN as string, // Repo Scope Permission
        });
        ```

        ```bash
        echo "GH_TOKEN=GH_TOKEN" > .env
        ```

    -   #### When done in public

        ```typescript
        autoUpdater.setFeedURL({
            provider: 'github',
            owner: 'AuthorName',
            repo: 'RepositoryName',
        });
        ```

## Reference

#### [GitHub issues](https://github.com/electron-react-boilerplate/electron-react-boilerplate/issues/400)

#### [StackOverflow](https://stackoverflow.com/questions/tagged/electron-react-boilerplate)
