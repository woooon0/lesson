import sys


input = sys.stdin.readline
target = int(input())
disnum = int(input())
dislist = list(map(int, input().split()))
minc = abs(100-target)
for nums in range(1000001):
    nums = str(nums)
    for i in range(len(nums)):
        if int(nums[i]) in dislist:
            break
        elif i == len(nums)-1:
            minc = min(minc, abs(int(nums)-target)+len(nums))
print(minc)


""" 타겟입력
안되는수 입력
제일 오래걸리는것 최소값으로
가능한 모든숫자를 검사함
안되는수 포함되면 제외
가능한수면 현재최소수와 비교해 최소값찾음
 """