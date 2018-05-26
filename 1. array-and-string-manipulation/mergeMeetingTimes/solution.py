# Write a function merge_ranges() that takes a list of 
# multiple meeting time ranges and returns a list of condensed ranges.

# Time / space
# Unsorted: O(n lg n) / O(n)
# Sorted: O(n) / O(n)
def merge_ranges(meetings):
    
    if len(meetings) < 2:
        raise ValueError('Need more meetings to merge')
    
    # Sort meetings to simplify range
    sorted_meetings = sorted(meetings)
    
    # Prep new set of merged set
    merged_result = [sorted_meetings[0]]
    
    for start_time, end_time in meetings[1:]:
        # Grab the times of the last item in merged set
        prev_start, prev_end = merged_result[-1]
        
        # If there's an overlap
        if start_time <= prev_end:
            prev_start = start_time
            prev_end = max(prev_end, end_time)
            # Update the last merged time with the new merged time range
            merged_result[-1] = ((prev_start, prev_end))
        else:
            # If no overlap
            merged_result.append((start_time, end_time))
        
    return merged_result

meetings = [(0, 1), (3, 5), (4, 8), (10, 12), (9, 10)]
print(merge_ranges(meetings))