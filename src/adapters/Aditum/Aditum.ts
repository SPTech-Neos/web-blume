import axios from "axios";

export class AditumAdapter {

    public static readonly urlAditumPortal = "https://portal-dev.aditum.com.br";
    public static readonly urlAditumGateway = "https://payment-dev.aditum.com.br";
    public static readonly urlAditumReconciliation = "https://reconciliation-dev.aditum.com.br";

    public static readonly merchantTokenAditum = "mk_vG0pqXJjikVnUD/MBNaLw";
    public static readonly merchantIdAditum = "a9296dbc-6372-4f8a-959d-40ff30135a2f";

    public static async GetAditumToken(): Promise<string | null> {
        try {
            const response = await axios.post(`${AditumAdapter.urlAditumPortal}/v1/Login/GenerateToken`, null, {
                headers: {
                    'MerchantToken': AditumAdapter.merchantTokenAditum,
                },
            });

            if (response.data && response.data.generatedToken) {
                const aditumAccessToken = response.data.generatedToken;
                console.log("Token gerado com sucesso:", aditumAccessToken);
                return aditumAccessToken;
            } else {
                throw new Error("Resposta inválida ao gerar o token da Aditum");
            }
        } catch (error) {
            console.error("Erro ao gerar o token da Aditum:", error);
            return null;
        }
    }

    public async getRequestAditum() {
        const aditumAccessToken = await AditumAdapter.GetAditumToken(); 
        if (!aditumAccessToken) {
            throw new Error("Não foi possível gerar o token da Aditum");
        }
        
        return {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${aditumAccessToken}`,
                'MerchantId': `a9296dbc-6372-4f8a-959d-40ff30135a2f`,
                'Accept': '*/*'
            }
        };
    }

}