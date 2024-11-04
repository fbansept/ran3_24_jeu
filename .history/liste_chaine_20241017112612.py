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
        #1 le dernier element ce n'est plus le dernier mais l'avant dernier
        #2 l'avant dernier (qui est devenule dernier) n'as plus de suivant
        #Note : pour acceder à l'avant dernier : pas le choix il faute recommencer à partir du premier element
        element_actuel = self.premier_element

        # while element_actuel.suivant.suivant != None :
        while element_actuel.suivant != self.dernier_element :
            element_actuel = element_actuel.suivant

        self.dernier_element = element_actuel
        self.dernier_element.suivant = None
        # element_actuel.suivant = None

    def supprimer_element(self, index_element) :
        pass


ma_liste = Liste()

ma_liste.add(1)
ma_liste.add(2)
ma_liste.add(3)

ma_liste.afficher_tout() #1 2 3

ma_liste.supprimer_dernier()

ma_liste.afficher_tout() #1 2 

ma_liste.add(4)

ma_liste.afficher_tout() #1 2 4






