import mqtt from "mqtt";
import fs from "fs";

export default async function handler(req:any, res:any) {
const KEY = fs.readFileSync('certificates/private.pem.key');
const CERT = fs.readFileSync('certificates/certificate.pem.crt');
const CA_FILE = fs.readFileSync('certificates/AmazonRootCA1.pem');

  const iotEndpoint = "a3bv4ywywemn62-ats.iot.ap-south-1.amazonaws.com";
  const statusTopic = "SWM/status";

  const mqttClient = mqtt.connect(`mqtts://${iotEndpoint}:8883`, {
    clientId: `mqtt_${Math.random().toString(16).slice(2)}`,
    key: KEY,
    cert: CERT,
    ca: CA_FILE,
    protocol: 'mqtts',
  });

await  mqttClient.on('connect', () => {
    console.log('Connected to AWS IoT');
    mqttClient.subscribe(statusTopic, (err) => {
      if (err) {
        console.error('Failed to subscribe to topic:', err);
        res.status(500).json({ error: 'Subscription failed' });
      } else {
        console.log('Subscribed to topic:', statusTopic);
      }
    });
  });

await  mqttClient.on('message', (topic, message) => {
    if (topic === statusTopic) {
      console.log('Received message:', message.toString());
      res.status(200).json({ data: message.toString() });
    }
  });

  mqttClient.on('error', (error) => {
    console.error('MQTT Client Error:', error);
    res.status(500).json({ error: 'MQTT Client Error' });
  });

  mqttClient.on('close', () => {
    mqttClient.end();
    console.log('MQTT Client Disconnected');
  });
}
