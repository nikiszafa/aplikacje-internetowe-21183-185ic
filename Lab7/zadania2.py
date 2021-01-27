###Zadanie1
# from redis import Redis
#
# redis_connection = Redis(decode_responses=True)
#
# list_key ="example-list"
#
# redis_connection.rpush(list_key,1,2,3,4,5)
#
# # print(redis_connection.lrange(list_key,0, -1))
# print(redis_connection.lrange(list_key,1,3))
#
###Zadanie2
# from redis import Redis
#
# redis_connection = Redis(decode_responses=True)
#
# list_key ="example-list"
#
# while True:
#     print(redis_connection.brpop(list_key))

###Zadanie3
# from redis import Redis
#
# redis_connection = Redis(decode_responses=True)
#
# redis_connection.set("key","value")
#
# redis_connection_1 = Redis(decode_responses=True, db=1)
#
# print(redis_connection_1.get("key"))
#
# print(redis_connection.get("key"))

###Zadanie4
# from redis import Redis
# from time import sleep
# from datetime import datetime
#
# redis_connection = Redis(decode_responses=True)
#
# redis_connection.setex("key",30,"value")
#
# print(datetime.now().time(), redis_connection.get("key"))
# sleep(10)
# print(datetime.now().time(), redis_connection.get("key"))
# sleep(30)
# print(datetime.now().time(), redis_connection.get("key"))

###Zadanie5
from redis import Redis
from time import sleep
from datetime import datetime

redis_connection = Redis(decode_responses=True)

redis_connection.set("key","value")
redis_connection.expire("key",30)

print(datetime.now().time(), redis_connection.get("key"))
sleep(10)
print(datetime.now().time(), redis_connection.get("key"))
sleep(30)
print(datetime.now().time(), redis_connection.get("key"))
