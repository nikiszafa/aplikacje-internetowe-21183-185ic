from redis import Redis

#redis_connection = Redis()
redis_connection = Redis(decode_responses=True)

key ="some-key"
#value ="some-val"
value =55

redis_connection.set(key, value)
print(redis_connection.get(key))

#redis_connection.append(key,"-append")
#print(redis_connection.get(key))

#redis_connection.delete(key)
#print(redis_connection.get(key))

print(redis_connection.incr(key,5))

print(redis_connection.decr(key,20))