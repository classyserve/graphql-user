#!/bin/bash
# wait-for-mysql.sh

set -e

host="$1"
# port="$2"
# db="$3"
shift
cmd="$@"

# UP=$(pgrep mysql | wc -l);
# until mysql -h"$host" -proot -P"$port" -uroot &> /dev/null
until ! mysql -u root -e "$db";
do
  printf "."
  sleep 1
done

echo "Mysql is up - executing command"
exec $cmd
