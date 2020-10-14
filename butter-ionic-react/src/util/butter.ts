import Butter from 'buttercms';
const token = process.env.react_app_butter_token;

export const butter = Butter(token as string);
