import figlet from 'figlet';
import { promisify } from 'util';

const figletPromise = promisify(figlet)

export default async () => figletPromise('TOP AWAIT WORKS');
