void merge(int A[], int temp[], int from, int mid, int to)
{
	int k = from, i = from, j = mid + 1;

	// loop till there are elements in the left and right runs
	while (i <= mid && j <= to)
	{
		if (A[i] < A[j])
			temp[k++] = A[i++];
		else
			temp[k++] = A[j++];
	}
}

// Iteratively sort array A[0..n-1] using temporary array
void mergesort(int A[], int temp[], int 0, int n-1)
{
	// divide the array into blocks of size m
	// m = [1, 2, 4, 8, 16...]
	for (int m = 1; m <= n-1; m = 2*m)
	{
		// for m = 1, i = 0, 2, 4, 6, 8
		// for m = 2, i = 0, 4, 8
		// for m = 4, i = 0, 8
		// ...
		for (int i = 0; i < n-1; i += 2*m)
		{
			int from = i;
			int mid = i + m - 1;
			int to = min(i + 2*m - 1, n-1);

			merge(A, temp, from, mid, to);
		}
	}
}
