import { useState, useEffect, useCallback } from 'react';
import type { Card, CardResponse, CardsData, ResponsesData } from '../types/card';

const POLL_INTERVAL = 2000; // 2 seconds
// publicDir serves files at root, not /data
const DATA_PATH = ''; // files are at /cards.json, /responses.json

export function useCardFeed() {
    const [cards, setCards] = useState<Card[]>([]);
    const [responses, setResponses] = useState<CardResponse[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch cards from JSON file
    const fetchCards = useCallback(async () => {
        try {
            const res = await fetch(`${DATA_PATH}/cards.json?t=${Date.now()}`);
            if (!res.ok) throw new Error('Failed to fetch cards');
            const data: CardsData = await res.json();
            setCards(data.cards.filter(c => c.status === 'pending'));
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error');
        } finally {
            setLoading(false);
        }
    }, []);

    // Submit response
    const submitResponse = useCallback(async (response: CardResponse) => {
        // Mark card as responded locally
        setCards(prev => prev.filter(c => c.id !== response.cardId));
        setResponses(prev => [...prev, response]);

        // In MVP, we'll write to localStorage as a demo
        // Real implementation would write to responses.json via a small server or file API
        const existing = localStorage.getItem('cardfeed_responses');
        const data: ResponsesData = existing ? JSON.parse(existing) : { responses: [] };
        data.responses.push(response);
        localStorage.setItem('cardfeed_responses', JSON.stringify(data));

        console.log('[CardFeed] Response submitted:', response);
    }, []);

    // Poll for new cards
    useEffect(() => {
        fetchCards();
        const interval = setInterval(fetchCards, POLL_INTERVAL);
        return () => clearInterval(interval);
    }, [fetchCards]);

    return {
        cards,
        responses,
        loading,
        error,
        submitResponse,
        refresh: fetchCards,
    };
}
