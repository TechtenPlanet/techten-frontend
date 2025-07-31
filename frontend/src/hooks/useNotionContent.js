import { useState, useEffect } from 'react';

// Base API URL - configurable for different environments
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-proxy-server-domain.com/api/content' // Update this with your actual proxy server domain
  : 'http://localhost:5000/api/content';

/**
 * Custom hook for fetching content from Notion CMS
 * @param {string} contentType - The type of content to fetch (e.g., 'home-hero', 'testimonials', 'services')
 * @param {object} options - Additional options for the request
 * @returns {object} - { data, loading, error, refetch }
 */
export const useNotionContent = (contentType, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { 
    fallbackData = null, 
    autoRefresh = false, 
    refreshInterval = 300000 // 5 minutes
  } = options;

  const fetchContent = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${API_BASE_URL}/${contentType}`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch ${contentType}: ${response.statusText}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      console.error(`Error fetching ${contentType}:`, err);
      setError(err.message);
      
      // Use fallback data if available
      if (fallbackData) {
        setData(fallbackData);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();

    // Set up auto-refresh if enabled
    let intervalId;
    if (autoRefresh) {
      intervalId = setInterval(fetchContent, refreshInterval);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [contentType, autoRefresh, refreshInterval]);

  return {
    data,
    loading,
    error,
    refetch: fetchContent
  };
};

// Specialized hooks for specific content types
export const useHomeHero = (options = {}) => {
  const result = useNotionContent('home-hero', options);
  
  // Parse items JSON if it exists
  if (result.data && result.data.items && typeof result.data.items === 'string') {
    try {
      result.data.items = JSON.parse(result.data.items);
    } catch (err) {
      console.error('Error parsing home hero items:', err);
      result.data.items = [];
    }
  }
  
  return result;
};

export const useImpactData = (options = {}) => {
  return useNotionContent('impact', options);
};

export const useTestimonials = (featured = false, options = {}) => {
  const endpoint = featured ? 'testimonials/featured' : 'testimonials';
  return useNotionContent(endpoint, options);
};

export const useServices = (options = {}) => {
  return useNotionContent('services', options);
};

export const usePartners = (featured = false, options = {}) => {
  const endpoint = featured ? 'partners/featured' : 'partners';
  return useNotionContent(endpoint, options);
};

export const useTeam = (department = null, options = {}) => {
  const endpoint = department ? `team/${department}` : 'team';
  return useNotionContent(endpoint, options);
};

export const usePrograms = (featured = false, options = {}) => {
  const endpoint = featured ? 'programs/featured' : 'programs';
  return useNotionContent(endpoint, options);
};

// Generic content hooks
export const useMission = (options = {}) => {
  return useNotionContent('mission', options);
};

export const useAboutSection = (options = {}) => {
  return useNotionContent('about-section', options);
};

export const useBenefits = (options = {}) => {
  return useNotionContent('benefits', options);
};

export const useProjectHighlights = (options = {}) => {
  return useNotionContent('project-highlights', options);
};

export const useTechForGirls = (options = {}) => {
  return useNotionContent('tech-for-girls', options);
};

export const useTechLabs = (options = {}) => {
  return useNotionContent('tech-labs', options);
};

export const useHackathons = (options = {}) => {
  return useNotionContent('hackathons', options);
};

export const useConsultants = (options = {}) => {
  return useNotionContent('consultants', options);
};

export const useGetInvolved = (options = {}) => {
  return useNotionContent('get-involved', options);
};

// Utility function to create fallback data from existing static imports
export const createFallbackData = (staticData) => {
  return {
    fallbackData: staticData,
    autoRefresh: false // Don't auto-refresh when using fallback
  };
};

export default useNotionContent;
