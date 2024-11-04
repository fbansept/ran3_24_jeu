class Element:
    def __init__(self, valeur, suivant = None) :
        self.valeur = valeur
        self.suivant = suivant

class Liste():
    def __init__(self) :
        self.premier_element = None
        self.dernier_element = None
        
    def add(self, valeur_element):
        "franck"

ma_liste = Liste()

ma_liste.add(42)

