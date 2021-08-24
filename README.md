# combinatorics.js-bigquery

```
CREATE TEMP FUNCTION combination_size(n NUMERIC, k NUMERIC) RETURNS NUMERIC LANGUAGE js AS """
    return combinatorics.combination(n, k);
"""
OPTIONS(library="gs://.../combinatorics.js");

CREATE TEMP FUNCTION combination_ith(seed STRING, k NUMERIC, i NUMERIC)
  RETURNS ARRAY<STRING>
  LANGUAGE js AS """
    let it = combinatorics.Combination.of(seed, k);
    return it.nth(i);
"""
OPTIONS(library="gs://.../combinatorics.js");

--choose(["a","b","c","d","e"],3)
WITH combination AS (
    SELECT * FROM UNNEST(GENERATE_ARRAY(0, combination_size(LENGTH("abcde"), 3)-1, 1)) AS i
)
SELECT combination.i, combination_ith("abcde", 3, combination.i) AS combo
FROM combination;


