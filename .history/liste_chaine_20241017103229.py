class Element:
    def __init__(self, valeur, suivant = None) :
        self.valeur = valeur
        self.suivant = suivant

class Liste():
    def __init__(self) :
        self.premier_element = None
        self.dernier_element = None
        
    def add(self, valeur_element):
        element = Element(valeur_element)

        if self.premier_element == None :
            self.premier_element = element
        else :
            self.dernier_element.suivant = element

        self.dernier_element = element
    
    def afficher_tout(self) : 
        element_actuel = self.premier_element

        while element_actuel != None :
            print(element_actuel.valeur)
            #l'element actuel devient le suivant de l'element actuel
            element_actuel = element_actuel.suivant

    def supprimer_dernier(self) :
        pass


ma_liste = Liste()

ma_liste.add(1)
ma_liste.add(2)
ma_liste.add(3)

ma_liste.afficher_tout()






