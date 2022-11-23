import pdfMaker from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
function pedidoPDF(pedidos){
    pdfMaker.vfs = pdfFonts.pdfMake.vfs;

    const formateDate = (date) => {
        return new Intl.DateTimeFormat("pt--BR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        }).format(new Date(date.data));
    };

    const relatorioTitulo = [
        {
            text: 'Relatório sobre todos pedidos',
            fontSize: 15,
            bold: true,
            alignment: 'center',
            margin: [15, 20, 0, 45]
        }
    ];

    const dados = pedidos.map((pedido)=>{
        return [
            {text: pedido.id_pedido, alignment:'center', fontSize: 9, margin: [0, 2, 0, 2]},
            {text: pedido.descricao, alignment:'center', fontSize: 9, margin: [0, 2, 0, 2]},
            {text: pedido.data, alignment:'center', fontSize: 9, margin: [0, 2, 0, 2]},
            {text: pedido.nomefantasia, alignment:'center', fontSize: 9, margin: [0, 2, 0, 2]},
        ]
    });

    const detalhes = [{
        table:{
            headerRows: 1,
            widths:['*', '*', '*', '*',],
            body: [
                [
                    {text:'ID', style:'tableHeader', alignment:'center', fontSize: 10},
                    {text:'Descricao', style:'tableHeader', alignment:'center', fontSize: 10},
                    {text:'Data', style:'tableHeader', alignment:'center', fontSize: 10},
                    {text:'Fornecedor', style:'tableHeader', alignment:'center', fontSize: 10},
                ],
                ...dados
                
            ],
        },
        layout: 'lightHorizontalLines'
    }];

    function Rodape(currentPage, pageCount){
        return[{
            text: currentPage + ' de ' + pageCount, 
            fontSize: 9,
            alignment: 'center',
            margin: [0, 10, 20, 0]
        }]
    }

    const docDefinicoes = {
        pageSize: 'A4',
        pageMargins: [15, 50, 15, 40],

        header: [relatorioTitulo],
        content: [detalhes],
        footer: Rodape
    };

    pdfMaker.createPdf(docDefinicoes).open();
}
export default pedidoPDF;