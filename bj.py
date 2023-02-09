from collections import deque
import sys
input = sys.stdin.readline

유저수, 친구관계수 = map(int,input().split())
print(유저수, 친구관계수)
graph = {}
for i in range(친구관계수):
    n1, n2 = map(int,input().split())
    if n1 not in graph:
        graph[n1] = [n2]
    elif n2 not in graph[n1]:
        graph[n1].append(n2)
    if n2 not in graph:
        graph[n2] = [n1]
    elif n1 not in graph[n2]:
        graph[n2].append(n1)
""" 그래프에 n1이 존재하지 않는다면 n1에 n2있는 새로운 그래프 생성
그리고 또는 n1이 존재하는데 n2가 거기 없으면 n2삽입
그래프에 n2가 존재하지 않는다면 n2에 n1있는 새로운 그래프 생성
그리고 또는 n2가 존재하는데 n1이 거기 없으면 n1삽입 """

print(graph)

def BFS(graph, root, target):
    visited = []
    queue = deque([root])
    vtime = 0
    while queue:
        n = queue.popleft()
        if n not in visited:
            visited.append(n)
            vtime += 1
            if target in visited:
                break

            if n in graph:
                temp = list(set(graph[n])-set(visited))
                temp.sort()
                queue += temp
    return vtime
print(BFS(graph, 1,2))

""" 방문한 리스트 추가
큐에 시작값 넣기
큐에 요소 있을때
큐에서 첫요소 n으로 가져오기
n이 방문안한값이면
방문한값 만들고
n이 입력받은값에 존재하면
n에 연결된값 중에 방문한값 제거한값 구하고
가장 작은값부터 방문하니 정렬하고
큐에 요소들 추가 """