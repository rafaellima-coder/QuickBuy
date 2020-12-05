namespace QuickBuy.Dominio.Entidades
{
    public class ItemPedido:Entidade
    {
        public int Id { get; set; }
        public int ProdutoId { get; set; }
        public int Quantidade { get; set; }

        public override void Vadlidate()
        {
            throw new System.NotImplementedException();
        }
    }
}
