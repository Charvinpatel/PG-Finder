"use client"

import { useState, useEffect } from "react"
import { gujaratPgApi } from "../services/gujaratPgApi"

export const useGujaratPgData = () => {
  const [pgs, setPgs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchAllPgs = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await gujaratPgApi.getAllPgs()
      setPgs(data)
    } catch (err) {
      setError(err.message)
      console.error("Error fetching PGs:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAllPgs()
  }, [])

  const searchPgs = async (query) => {
    try {
      setLoading(true)
      setError(null)
      const data = await gujaratPgApi.searchPgs(query)
      setPgs(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const getPgsByCity = async (city) => {
    try {
      setLoading(true)
      setError(null)
      const data = await gujaratPgApi.getPgsByCity(city)
      setPgs(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const getPgsByType = async (type) => {
    try {
      setLoading(true)
      setError(null)
      const data = await gujaratPgApi.getPgsByType(type)
      setPgs(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const sortPgs = (sortBy) => {
    const sortedPgs = [...pgs]
    switch (sortBy) {
      case "price-low":
        sortedPgs.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        sortedPgs.sort((a, b) => b.price - a.price)
        break
      case "rating":
        sortedPgs.sort((a, b) => (b.rating || 0) - (a.rating || 0))
        break
      case "featured":
        sortedPgs.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
        break
      case "reviews":
        sortedPgs.sort((a, b) => (b.reviews || 0) - (a.reviews || 0))
        break
      case "city":
        sortedPgs.sort((a, b) => a.city.localeCompare(b.city))
        break
      default:
        // Keep original order
        break
    }
    setPgs(sortedPgs)
  }

  return {
    pgs,
    loading,
    error,
    searchPgs,
    getPgsByCity,
    getPgsByType,
    sortPgs,
    refetch: fetchAllPgs,
  }
}

export const useFeaturedPgs = () => {
  const [featuredPgs, setFeaturedPgs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchFeaturedPgs = async () => {
      try {
        setLoading(true)
        const data = await gujaratPgApi.getFeaturedPgs()
        setFeaturedPgs(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchFeaturedPgs()
  }, [])

  return { featuredPgs, loading, error }
}
