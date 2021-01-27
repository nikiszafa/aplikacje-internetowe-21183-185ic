# Przykład1
# from redis import Redis
#
# redis_connection = Redis(decode_responses=True, db=0)
#
# script = """
# return "test"
# """
#
# print(redis_connection.eval(script, 0))

#Przykład2
# from redis import Redis
#
# redis_connection = Redis(decode_responses=True, db=0)
#
#
# script ="""
# return {KEYS[1],KEYS[2],ARGV[1],ARGV[2]}
# """
#
# print(redis_connection.eval(script,2,1,2,'first','second'))

#Przyklad3
# from redis import Redis
#
# redis_connection = Redis(decode_responses=True, db=0)
#
# script ="""
# local arr = {}
# for i = 0, 10 do
#     arr[i] = i
# end
# return arr
# """
#
# print(redis_connection.eval(script,0))# lista od 1 do 10

#Przyklad4
# from redis import Redis
# from json import dumps
#
# redis_connection = Redis(decode_responses=True, db=0)
#
# script ="""
# local json_data = KEYS[1]
# local decoded_data = cjson.decode(json_data)
# return decoded_data['a'] + decoded_data['b']
# """
#
# print(redis_connection.eval(script,1, dumps({'a': 1,'b': 6})))

#Przyklad5
from redis import Redis

redis_connection = Redis(decode_responses=True, db=0)

permission ='ADD_BOOKING'

redis_connection.sadd("users_group:2", *list(range(0,50)))

redis_connection.sadd('permissions', permission)

# dotąd jest przygotowanie danych

add_permission_script ="""
local is_valid_permission = redis.call('sismember', 'permissions', KEYS[2])
if is_valid_permission == 1 then
    local users = redis.call('smembers','users_group:'..KEYS[1])
    for _, user in ipairs(users) do
        redis.call('sadd', 'user_permissions:'..user, KEYS[2])
    end
    return true
else
    return false
end
"""


print(redis_connection.eval(add_permission_script,2,2, permission))
