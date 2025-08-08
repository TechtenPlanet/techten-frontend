const cache = new Map();

/**
 * Sets a value in the cache with a given key and TTL.
 * @param {string} key - The cache key.
 * @param {*} value - The value to store.
 * @param {number} ttl - Time to live in milliseconds.
 */
export const setCache = (key, value, ttl) => {
  const expiresAt = Date.now() + ttl;
  cache.set(key, { value, expiresAt });
  console.log(`Cache set for key: ${key}, expires in ${ttl / 1000} seconds`);
};

/**
 * Gets a value from the cache. Returns null if expired or not found.
 * @param {string} key - The cache key.
 * @returns {*} The cached value or null.
 */
export const getCache = (key) => {
  const entry = cache.get(key);
  if (!entry) {
    return null;
  }

  if (Date.now() > entry.expiresAt) {
    cache.delete(key); // Remove expired entry
    console.log(`Cache expired for key: ${key}`);
    return null;
  }

  console.log(`Cache hit for key: ${key}`);
  return entry.value;
};

/**
 * Clears a specific cache entry.
 * @param {string} key - The cache key to clear.
 */
export const clearCache = (key) => {
  cache.delete(key);
  console.log(`Cache cleared for key: ${key}`);
};

/**
 * Clears all cache entries.
 */
export const clearAllCache = () => {
  cache.clear();
  console.log('All cache cleared');
};
