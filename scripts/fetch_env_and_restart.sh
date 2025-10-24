cd /home/siva/Nodejs-app/
export APP_NAME=$(aws ssm get-parameter --name "/my-app/APP_NAME" --query "Parameter.Value" --output text)
export PORT=$(aws ssm get-parameter --name "/my-app/PORT" --query "Parameter.Value" --output text)
pm2 restart my-app || pm2 start app.js --name my-app

