
def circularArrayRotation(a, k, queries):
	n=len(a)
	array=[]
	for i in queries:
		array.append(a[(n-k+i)%n])	
	return array

print(circularArrayRotation([3,4,5], 2, [1,2]))