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

WITH choose AS (
    SELECT 3 AS k
),
elements AS (
    SELECT ['a','b','c','d','e'] AS e
),
combination AS (
    SELECT * FROM choose, elements, UNNEST(GENERATE_ARRAY(0, combination_size(ARRAY_LENGTH(elements.e), choose.k)-1, 1)) AS i
)
SELECT combination.i, combination_ith(elements.e, choose.k, combination.i) AS combo
FROM choose, elements, combination;


