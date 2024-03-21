package domain;

import java.util.*;

public class Game {

	private DrawPile drawPile;
	private Deck deck;
	private List<Player> players;
	
	public Game() {
		drawPile = new DrawPile();
		deck = new Deck();
		players = new ArrayList<>();
	}

	public void setUp() {
		deck.setupDeck();
	}

	private void handCards() {
		// TODO - implement Game.handCards
		throw new UnsupportedOperationException();
	}

	private void makeDrawPile() {
		// TODO - implement Game.makeDrawPile
		throw new UnsupportedOperationException();
	}

	

}