# #!/bin/bash
# # wait-for-mysql.sh

set -e

db="$1"
port="$2"
db="$3"
shift
cmd="$@"

until [ mysql -h"$host" -proot -P"$port" -uroot &> /dev/null ]
do
  printf "."
  sleep 1 
done
