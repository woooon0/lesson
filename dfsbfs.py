import sys
from collections import deque
input = sys.stdin.readline
정점, 간선, 시작위치 = map(int, input().split())
def DFS(graph, root):
    visited = []
    stack = [root]

    while stack:
        n = stack.pop()
        if n not in visited:
            visited.append(n)
            if n in graph:
                temp = list(set(graph[n])-set(visited))
                temp.sort(reverse=True)
                stack += temp
    return ' '.join(str(i) for i in visited)
  
""" 방문한 리스트 추가
스택에 방문할 위치 추가
스택에 방문할 거 있으면
가장오른쪽 위치 팝
방문안했었으면
방문리스트에 추가
입력된 그래프에 n에서 방문할 값이 있으면
n에서 방문할값에서 방문된값 제거
순서대로 방문해야되니 가장가까운값 오른쪽가게 방문할값 뒤집기
스택에 추가
방문한 순서대로 노드 출력 """

def BFS(graph, root):
    visited = []
    queue = deque([root])
    while queue:
        n = queue.popleft()
        if n not in visited:
            visited.append(n)
            if n in graph:
                temp = list(set(graph[n])-set(visited))
                temp.sort()
                queue += temp
    return ' '.join(str(i) for i in visited)

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

graph = {}
for i in range(간선):
    n1,n2 = map(int, input().split())
    if n1 not in graph:
        graph[n1] = [n2]
    elif n2 not in graph[n1]:
        graph[n1].append(n2)
    if n2 not in graph:
        graph[n2] = [n1]
    elif n1 not in graph[n2]:
        graph[n2].append(n1)

print(DFS(graph, 시작위치))
print(BFS(graph, 시작위치))
