import time
import paho.mqtt.client as mqtt
import ssl

broker_address = "c22669d8fc044b09a5439b33a1ec4d86.s2.eu.hivemq.cloud"
port = 8883

def on_connect(client, userdata, flags, rc):
    print("Conetado com sucesso")
    command = input("Digite o comando:")
    client.publish(topic="topic", payload=command)

def on_message(client, userdata, msg):
    print(f"Mensagem recebida " + msg.payload.decode())

client = mqtt.Client()

ssl_context = ssl.SSLContext()
client.tls_set_context(context=ssl_context)

client.username_pw_set("DiegoBr", "Meutaker480")

client.on_connect = on_connect
client.on_message = on_message

client.connect(broker_address, port=port)

client.loop_forever()

