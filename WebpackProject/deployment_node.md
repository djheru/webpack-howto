# Deploying Node App

## Heroku
- Create Procfile: `web: node server.js`
- Install Heroku cli
	- devcenter.heroku.com
- Create app `heroku create`
- Heroku cli adds heroku remote git repo
- Run `git push heroku master` to deploy
- Run `heroku logs` to view logs
- Run `heroku open` to open the site

## AWS Elastic Beanstalk
- Install Elastic Beanstalk CLI
	- Instructions: http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html
- `eb init`
	- Answer region question
	- Answer credentials questions
		- Sign into console
		- Click user button
		- "My Access Keys"
	- Enter Application Name
	- Is node?
	- Use code commit? No
	- Set up SSH? Yes
	- Select a keypair
		- Create new
- `eb create`
	- Answer project questions
	- Use application LB
- Set production environment vars
	- `eb setenv NODE_ENV=production`
- `eb open`
- Destroy app - `eb terminate`
