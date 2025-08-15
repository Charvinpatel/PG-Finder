"use client"

import { useState, useEffect } from "react"
import { pgApi } from "../services/pgApi"

export const usePgData = () => {
  const [pgs, setPgs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchPgs = async () => {
    try {
      setLoading(true)
      const data = await pgApi.getAllPgs()
      setPgs(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPgs()
  }, [])

  const searchPgs = async (query) => {
    try {
      setLoading(true)
      const data = await pgApi.searchPgs(query)
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
      const data = await pgApi.getPgsByCity(city)
      setPgs(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return {
    pgs,
    loading,
    error,
    searchPgs,
    getPgsByCity,
    refetch: fetchPgs,
  }
}
