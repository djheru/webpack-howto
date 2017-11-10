# Getting Production Ready

## Surge

http://surge.sh

- `npm install -g surge`
- `npm run build`
- `surge -p ./dist`
- Enter auth info
- Press enter to deploy to given url

## GitHub Pages

If you create a branch named `gh-pages`, it will automatically be served at https://{username}.github.io/{repo name}.

```
git checkout -b gh-pages
git subtree push --prefix dist origin gh-pages
```

Create run script in package.json
```JSON
"predeploy": "npm run build",
"deploy": "git subtree push --prefix dist origin gh-pages"
```

## AWS S3

- Install cli - `npm install -g s3-website`
- Automatically creates a bucket
- Create AWS key
	- Go to My Security Credentials under your name dropdown
	- Access Keys
	- Create new access key
	- Create new file called `.env`
	- Define 2 variables
		- `AWS_ACCESS_KEY_ID=`
		- `AWS_SECRET_ACCESS_KEY=`
	- Fill in the values
- Create bucket `s3-website create thenameisunique`
- Deploy `s3-website deploy dist`
